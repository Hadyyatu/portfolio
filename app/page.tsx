"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  // ========== LIENS MODIFIABLES ==========
  const LINKS = {
    email: "votre.email@example.com",
    github: "https://github.com/votre-username",
    linkedin: "https://linkedin.com/in/votre-profil",
    cv: "/cv.pdf",

    // Veilles
    veilleCyber: "/veilles/cybersecurite.html",
    veilleInfra: "/veilles/infrastructure.html",

    // Synthèse
    synthesePdf: "/synthese/tableau-synthese.pdf",
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur">
        <div className="container max-w-4xl mx-auto flex h-16 items-center justify-center">
          <nav className="flex items-center space-x-8 text-sm">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              À propos
            </Link>
            <Link href="#bts" className="text-gray-300 hover:text-white transition-colors">
              BTS SIO
            </Link>
            <Link href="#stage" className="text-gray-300 hover:text-white transition-colors">
              Stage
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Compétences
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projets
            </Link>
            <Link href="#veilles" className="text-gray-300 hover:text-white transition-colors">
              Veilles
            </Link>
            <Link href="#education" className="text-gray-300 hover:text-white transition-colors">
              Formation
            </Link>
            <Link href="#synthese" className="text-gray-300 hover:text-white transition-colors">
              Synthèse
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="absolute right-4">
            <Button variant="outline" size="sm" asChild className="border-gray-700 hover:bg-gray-800 bg-transparent">
              <a href={LINKS.cv} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Étudiant en BTS SIO
            <br />
            <span className="text-blue-400">Option SISR</span>
          </h1>
          <p className="text-xl text-gray-400">Passionné par l'infrastructure IT, les systèmes et réseaux.</p>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 border-t border-gray-800">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">À propos de moi</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Étudiant motivé en BTS SIO option SISR, je me spécialise dans l'administration des systèmes, la gestion des
            réseaux et la sécurité informatique. Mon objectif est de devenir un expert en infrastructure IT.
          </p>
        </div>
      </section>

      {/* BTS SIO */}
      <section id="bts" className="py-20 border-t border-gray-800">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">BTS SIO option SISR</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Qu'est-ce que le BTS SIO ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Le BTS Services Informatiques aux Organisations forme des techniciens supérieurs capables de gérer et
                  maintenir l'infrastructure informatique d'une organisation.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
                    <strong className="text-blue-300">SISR</strong>
                    <span className="text-gray-300"> - Solutions d'Infrastructure, Systèmes et Réseaux</span>
                  </div>
                  <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg opacity-60">
                    <strong className="text-gray-400">SLAM</strong>
                    <span className="text-gray-500"> - Solutions Logicielles et Applications Métiers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Pourquoi l'option SISR ?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Passion pour les technologies réseau et serveurs
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Intérêt pour la cybersécurité
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Volonté de devenir expert en infrastructure IT
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Secteur en forte demande
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stage */}
      <section id="stage" className="py-20 border-t border-gray-800">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mon expérience en stage</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Technicien Infrastructure IT</CardTitle>
              <CardDescription className="text-gray-400">
                Entreprise XYZ • Janvier 2025 - Mars 2025 (10 semaines)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">Stage au sein du service informatique d'une PME de 150 employés.</p>
              <div className="space-y-4">
                <strong className="text-white">Missions principales :</strong>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Administration des serveurs Windows Server 2019/2022
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Gestion du parc informatique (120 postes)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Configuration et dépannage réseau
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Support technique niveau 1 et 2
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Mise en place de solutions de sauvegarde
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20 border-t border-gray-800">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences techniques</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Administration Systèmes",
              "Réseaux & Sécurité",
              "Infrastructure",
              "Base de données",
              "Supervision",
              "Scripting",
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-gray-900 border border-gray-800 rounded-lg text-center">
                <h3 className="font-medium text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 border-t border-gray-800">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets réalisés</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Installation et configuration d'un serveur Windows Server
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Installation complète d'un serveur Windows Server 2022 avec configuration des rôles AD DS, DNS et
                  DHCP.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Mise en place d'un réseau local avec VLANs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Configuration d'un switch manageable avec création de VLANs et mise en place du routage inter-VLAN.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Déploiement d'une solution de sauvegarde</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Installation et configuration d'une solution de sauvegarde automatisée avec planification et
                  restauration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Configuration d'un serveur de fichiers avec partages sécurisés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Mise en place d'un serveur de fichiers avec gestion des permissions et politique de sécurité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Veilles */}
      <section id="veilles" className="py-20 border-t border-gray-800">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Veilles technologiques</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Cybersécurité & Menaces</CardTitle>
                <CardDescription className="text-gray-400">
                  Veille sur les nouvelles menaces et solutions de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Suivi quotidien des dernières vulnérabilités, attaques et solutions de cybersécurité.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full border-gray-700 hover:bg-gray-800 bg-transparent"
                >
                  <a href={LINKS.veilleCyber} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir la veille
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Infrastructure & Cloud</CardTitle>
                <CardDescription className="text-gray-400">
                  Évolutions des technologies d'infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Suivi des innovations en matière d'infrastructure IT, virtualisation et services cloud.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full border-gray-700 hover:bg-gray-800 bg-transparent"
                >
                  <a href={LINKS.veilleInfra} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir la veille
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="education" className="py-20 border-t border-gray-800">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">BTS SIO option SISR</CardTitle>
                <CardDescription className="text-gray-400">Lycée Technique • 2023 - 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Formation en Solutions d'Infrastructure, Systèmes et Réseaux</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Baccalauréat STI2D</CardTitle>
                <CardDescription className="text-gray-400">Lycée Général • 2020 - 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Spécialité Systèmes d'Information et Numérique</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Synthèse */}
      <section id="synthese" className="py-20 border-t border-gray-800">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tableau de synthèse</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Synthèse de formation BTS SIO SISR</CardTitle>
              <CardDescription className="text-gray-400">
                Document récapitulatif de mon parcours BTS SIO option SISR
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-8">
                Document officiel récapitulant l'ensemble de mon parcours, compétences acquises et réalisations.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={LINKS.synthesePdf} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-gray-800">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Me contacter</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex justify-center">
              <Card className="bg-gray-900 border-gray-800 w-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-blue-400" />
                    <div>
                      <p className="font-medium text-white text-lg">Email</p>
                      <a href={`mailto:${LINKS.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        {LINKS.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Nom
                    </Label>
                    <Input id="name" placeholder="Votre nom" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-300">
                    Sujet
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Sujet de votre message"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container max-w-4xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-400">Portfolio BTS SIO SISR - Tous droits réservés</p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
