import React from 'react';

export const metadata = {
  title: 'TaskText (Staging)',
  description: 'Lightweight SMS-first task tracker'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', margin: 0, padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
