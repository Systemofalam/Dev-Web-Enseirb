import { Router } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from './db.js'

const router = Router()

// Commande test: curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d "{\"email\":\"bob@example.org\",\"password\":\"motdepasse123\"}"
// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body ?? {}
        if (!email || !password) {
            return res.status(400).json({ error: 'Email et mot de passe requis' })
        }
        if (password.length < 8) {
            return res.status(400).json({ error: 'Mot de passe trop court (8 caractères min.)' })
        }

        const passwordHash = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: { email: email.trim().toLowerCase(), passwordHash },
            select: { id: true, email: true, createdAt: true },
        })
        return res.status(201).json(user)
    } catch (err) {
        if (err.code === 'P2002') {
            return res.status(409).json({ error: 'Cet email est déjà utilisé' })
        }
        console.error(err)
    return res.status(500).json({ error: 'Erreur serveur' })
    }
})

// TODO POST /api/auth/login
// Vérifier email + mot de passe (bcrypt.compare), même message d'erreur si l'email
// est inconnu ou si le mot de passe est faux (401), puis renvoyer
// { accessToken, refreshToken } dans le body (jsonwebtoken).

// TODO POST /api/auth/refresh
// Lire refreshToken dans le body, le vérifier, puis renvoyer de nouveaux tokens
// (rotation du refresh token).

// TODO GET /api/auth/me
// Route protégée : écrire d'abord le middleware requireAuth (lit le header
// "Authorization: Bearer <token>", vérifie le token, met l'id dans req.userId),
// puis renvoyer id et email de l'utilisateur connecté.

// TODO POST /api/auth/logout
// Peut rester minimal (204) : c'est le front qui supprime ses tokens.

export default router