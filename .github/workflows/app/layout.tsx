export const metadata = {
  title: 'Pokémon Content',
  description: 'Premium Pokémon cards & content',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
