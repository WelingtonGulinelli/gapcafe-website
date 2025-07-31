import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GapCafePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navbar */}
      <nav className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/favicon.ico?height=100&width=200"
                alt="Logo GapCafé"
                width={70}
                height={40}
              />
              <span className="text-2xl font-bold">Gap Café</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-amber-200 transition-colors">
                Home
              </Link>
              <Link href="#sobre" className="hover:text-amber-200 transition-colors">
                Sobre
              </Link>
              <Link href="#grupo" className="hover:text-amber-200 transition-colors">
                Grupo
              </Link>
              <Link href="#app" className="hover:text-amber-200 transition-colors">
                App
              </Link>
              <Link href="#contato" className="hover:text-amber-200 transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-4">
        <Image
          src="/foto-principal.jpg"
          alt="Plantação de café"
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Gap Café</h1> */}
          {/* <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Conectando produtores e consumidores através do melhor café do Brasil
          </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
              Conheça Nossos Cafés
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
            >
              Baixe Nosso App
            </Button>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-900">500+</div>
              <div className="text-amber-700">Produtores Parceiros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900">+20</div>
              <div className="text-amber-700">Anos de Mercado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Sobre a GapCafé</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Somos uma empresa especializada na compra, venda e armazenagem de café!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-amber-700">
                A GAP Café é uma empresa dedicada à comercialização e armazenagem de café, cuja jornada começou em 1988 com esforço e dedicação de Gelço Antônio Pazini e seu irmão Jocimar Pazini.               </p>
              <p className="text-amber-700">
                Inicialmente, a empresa operava com recursos modestos, contando apenas com um pequeno secador e um galpão montado no quintal de sua residência. Esse modesto começo, no entanto, não se limitou a satisfazer apenas suas próprias necessidades, mas também as de seus vizinhos.              </p>
              <p className="text-amber-700">
                À medida que os negócios prosperaram, a GAP Café empreendeu uma jornada de crescimento, modernização e estruturação. O objetivo principal era oferecer aos seus parceiros o que há de melhor no mundo do café.              </p>
            </div>
            <div>
              <Image
                src="/about.b5704001f2081201.jpg"
                alt="Grupo GAP"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grupo Section */}
      <section id="grupo" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/grupo-gap.d06ac9fd6d17ec84.jpeg" 
                alt="Grupo GAP"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Grupo GAP</h2>
              <p className="text-amber-700">
                Com o crescimento dos negócios, a família investiu no ramo de rochas ornamentais, dando origem ao Grupo GAP. No Grupo GAP, compartilhamos um mesmo propósito: valorizar o trabalho das pessoas e proporcionar experiências únicas.
              </p>
              <p className="text-amber-700">
                Queremos que você faça parte dessa jornada conosco! Conheça mais sobre o Grupo GAP, explore nossas marcas e descubra como podemos agregar valor à sua vida, seja por meio do prazer de um café especial ou pela beleza das rochas ornamentais.
              </p>
              <p className="text-amber-700">
                Visite nosso site para saber mais sobre o Grupo GAP, onde o sabor do café e a elegância das rochas ornamentais se unem em uma única família.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                Grupo GAP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-center text-4xl font-bold text-amber-900 mb-6">App GAP Café</h2>
              <p className="text-xl text-amber-700 mb-8">
                Visando transformar a maneira como os negócios são conduzidos no setor cafeeiro, o app GAP CAFÉ busca proporcionar uma conexão direta com os produtores, otimizando o tempo e aumentando a eficiência nas negociações.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800">Vender</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800">Ofertar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800">Pagar e Receber</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800">Gestão de Créditos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800">Informações em tempo real</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link href="https://apps.apple.com/br/app/gap-caf%C3%A9/id6448287227" target="_blank" >
                  <Image
                    src="/App-store.png"
                    alt="App GapCafé"
                    width={200}
                    height={170}
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.gapcafeapp.cafe_app" target="_blank">
                  <Image
                    src="/play-store.png"
                    alt="App GapCafé"
                    width={200}
                    height={170}
                  />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/app.png"
                alt="App GapCafé"
                width={800}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Contato</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Estamos prontos para atender você. Entre em contato conosco !
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-center text-amber-900">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="text-amber-800">(28) 99917-8125</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span className="text-amber-800">gapcafe@gapcafe.com.br</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                    <span className="text-amber-800">Rod. A, Vargem Alta - ES, 29295-000</span>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.331311531245!2d-40.98816448830503!3d-20.75367706411987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb96df4a718ecf1%3A0x9fa7d8ae41f194b5!2sGap%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1722448511399!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-amber-700">
                  <div>Segunda a Sexta: 7h às 17h</div>
                  <div>Sábado: Fechado</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                src="/favicon.ico?height=100&width=200"
                alt="Logo GapCafé"
                width={70}
                height={40}
              />
                <span className="text-2xl font-bold">GapCafé</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <Link href="#home" className="block text-amber-200 hover:text-white">
                  Home
                </Link>
                <Link href="#sobre" className="block text-amber-200 hover:text-white">
                  Sobre
                </Link>
                <Link href="#grupo" className="block text-amber-200 hover:text-white">
                  Grupo
                </Link>
                <Link href="#app" className="block text-amber-200 hover:text-white">
                  App
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <div className="space-y-2 text-amber-200">
                <div>Compra de Café</div>
                <div>Venda de Café</div>
                <div>Consultoria</div>
                <div>Logística</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-amber-200">
                <div>(28) 99917-8125</div>
                <div>gapcafe@gapcafe.com.br</div>
                <div>Rod. A, Vargem Alta - ES, 29295-000</div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 GapCafé. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
