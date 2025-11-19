import path from 'path';
import { registerJob } from '@evershop/evershop/lib/cronjob';
import { query } from '@evershop/evershop/lib/postgres';
import bcrypt from 'bcryptjs';

async function ensureAdminUser() {
  const email = 'admin@evershop.com';
  const password = 'admin123'; // change if needed
  const hashed = await bcrypt.hash(password, 10);

  const existing = await query('SELECT * FROM admin_user WHERE email = $1', [
    email
  ]);

  if (existing.rows.length === 0) {
    await query(
      `INSERT INTO admin_user
      (uuid, status, email, password, full_name, created_at, updated_at)
      VALUES (gen_random_uuid(), true, $1, $2, 'Admin User', NOW(), NOW())`,
      [email, hashed]
    );
    console.log('✔ Default admin user created');
  } else {
    console.log('✔ Admin user already exists — skipping creation');
  }
}

export default async function () {
  // Create admin on startup
  await ensureAdminUser();

  // Your existing cronjob
  registerJob({
    name: 'sampleJob',
    schedule: '*/1 * * * *', // Runs every minute
    resolve: path.resolve(import.meta.dirname, 'crons', 'everyMinute.js'),
    enabled: true
  });
}

