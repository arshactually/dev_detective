import './globals.css'

export const metadata: Metadata = {

  title: 'Dev_detective',
  description: 'Generated by Arshactually',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#FFFFFF]'>{children}</body>
    </html>
  )
}


