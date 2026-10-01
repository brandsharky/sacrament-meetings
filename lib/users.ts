import { neon } from '@neondatabase/serverless';



const sql = neon(process.env.POSTGRES_URL!);


export type User = {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
};


export async function getUserByEmail(email: string): Promise<User | null> {
  const rows = await sql`
    SELECT
      id,
      email,
      password_hash AS "passwordHash",
      name
    FROM users
    WHERE email = ${email}
  `;

  if (!rows[0]) {
    return null;
  }

  return {
    id: String(rows[0].id),
    email: rows[0].email,
    passwordHash: rows[0].passwordHash,
    name: rows[0].name,
  };
}