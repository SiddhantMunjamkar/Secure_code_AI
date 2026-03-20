import { apiFetch } from "@/lib/api";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  is_active?: boolean;
  last_login?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  user: AuthUser;
}

type AuthPayload = AuthResponse | AuthUser;

export interface SignUpPayload {
  Name: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export function getGithubOAuthStartUrl() {
  return `${BASE_URL}/api/auth/oauth/github`;
}

function normalizeAuthUser(payload: AuthPayload): AuthUser {
  if ("user" in payload && payload.user) {
    return payload.user;
  }

  if ("id" in payload && "email" in payload) {
    return payload;
  }

  throw new Error("Invalid auth response shape");
}

export async function signUpWithEmail(payload: SignUpPayload) {
  const response = await apiFetch<AuthPayload>("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return normalizeAuthUser(response);
}

export async function signInWithEmail(payload: SignInPayload) {
  const response = await apiFetch<AuthPayload>("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return normalizeAuthUser(response);
}

export async function getCurrentUser() {
  const response = await apiFetch<AuthPayload>("/api/auth/me", {
    cache: "no-store",
  });
  return normalizeAuthUser(response);
}
