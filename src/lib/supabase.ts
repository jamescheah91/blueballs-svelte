import { createClient } from '@supabase/supabase-js';
import { browser } from '$app/environment';

// Environment variables - these will be set properly when the app runs
const supabaseUrl = browser ? import.meta.env.VITE_PUBLIC_SUPABASE_URL || 'https://gucvzugmlfgjkouitkal.supabase.co' : 'https://gucvzugmlfgjkouitkal.supabase.co';
const supabaseAnonKey = browser ? import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Y3Z6dWdtbGZnamtvdWl0a2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNjIxODgsImV4cCI6MjA3NDczODE4OH0.pYKJ7Z8fzPEBhkpdkgHj14-5_wNJOS8yuaoMlGrTXBM' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Y3Z6dWdtbGZnamtvdWl0a2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNjIxODgsImV4cCI6MjA3NDczODE4OH0.pYKJ7Z8fzPEBhkpdkgHj14-5_wNJOS8yuaoMlGrTXBM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          username: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          username: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          username?: string;
          created_at?: string;
        };
      };
      high_scores: {
        Row: {
          id: number;
          user_id: string;
          username: string;
          score: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          username: string;
          score: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          username?: string;
          score?: number;
          created_at?: string;
        };
      };
    };
  };
};