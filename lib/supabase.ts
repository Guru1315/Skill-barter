export type User = {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  bio?: string
  location?: string
  created_at: string
}

export type Skill = {
  id: string
  user_id: string
  title: string
  description: string
  category: string
  type: 'offer' | 'want'
  hours_per_week: number
  created_at: string
  user?: User
}

export type BarterRequest = {
  id: string
  sender_id: string
  receiver_id: string
  sender_skill_id: string
  receiver_skill_id: string
  status: 'pending' | 'accepted' | 'rejected' | 'completed'
  message: string
  created_at: string
}

export type Message = {
  id: string
  barter_id: string
  sender_id: string
  content: string
  created_at: string
}

export type Review = {
  id: string
  barter_id: string
  reviewer_id: string
  reviewed_id: string
  rating: number
  comment: string
  created_at: string
}
