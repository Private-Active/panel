import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Shield,
  Zap,
  Database,
  Lock,
  Globe,
  Download,
  Github,
  Users,
  Mail,
  CheckCircle,
  Terminal,
  Rocket,
  Settings,
  FileText,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function TinyPanelLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TinyPanel</h1>
              <p className="text-sm text-gray-600">LEMP Stack Installer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#technologies" className="text-gray-600 hover:text-blue-600 transition-colors">
              Technologies
            </Link>
            <Link href="#installation" className="text-gray-600 hover:text-blue-600 transition-colors">
              Installation
            </Link>
            <Link href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Fast, Secure & Optimized LEMP Stack
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              TinyPanel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                LEMP Stack Installer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Quickly install and configure Nginx, MariaDB, and PHP with optimized performance and security settings.
              Built for Ubuntu VPS servers with comprehensive management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Quick Install
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
            <div className="mt-8 p-4 bg-gray-900 rounded-lg text-left max-w-2xl mx-auto">
              <code className="text-green-400 text-sm">
                curl -sO https://tinyactive.github.io/panel/install && chmod +x install && ./install
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Web Hosting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to set up and manage a high-performance web server environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimized</h3>
                <p className="text-gray-600">
                  Optimized MySQL, Nginx, and PHP configurations based on your VPS specifications. Includes Brotli
                  compression and FastCGI caching.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Security</h3>
                <p className="text-gray-600">
                  Comprehensive security with Fail2ban, user isolation, disabled dangerous PHP functions, and automatic
                  SSL certificate management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Management</h3>
                <p className="text-gray-600">
                  User-friendly menu system with regular updates, comprehensive WordPress tools, and automated backup
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete LEMP Stack Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Latest Software Versions</h3>
                    <p className="text-gray-600">
                      MariaDB 10.5, latest Nginx, multiple PHP versions (5.6, 7.0-7.4, 8.0-8.4)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Caching Solutions</h3>
                    <p className="text-gray-600">Redis & Memcached support with FastCGI cache configuration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SSL & Security</h3>
                    <p className="text-gray-600">Let's Encrypt integration with CloudFlare DNS API support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Development Tools</h3>
                    <p className="text-gray-600">WP-CLI, Composer, Supervisor, Rclone, and malware scanning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-blue-400">$</span> ./install
                </div>
                <div className="space-y-2 text-xs">
                  <div>✓ Installing Nginx...</div>
                  <div>✓ Configuring MariaDB 10.5...</div>
                  <div>✓ Setting up PHP 8.1...</div>
                  <div>✓ Configuring SSL certificates...</div>
                  <div>✓ Setting up security rules...</div>
                  <div>✓ Optimizing performance...</div>
                  <div className="text-green-300">Installation completed successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Management */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive WordPress Management</h2>
            <p className="text-xl text-gray-600">Specialized tools for WordPress hosting and optimization</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Core Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Version checking & updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Plugin management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Domain changes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Admin password reset
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Database prefix randomization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Performance & Cache</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Database optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Redis/Memcached setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    WP-Rocket configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    W3 Total Cache support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cache Enabler integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Security & SEO</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Yoast SEO configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rank Math setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Maintenance mode
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Debug mode toggle
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    XML-RPC management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Modern Technologies</h2>
            <p className="text-xl text-gray-600">Industry-standard tools and frameworks for reliable performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-blue-600" />
                  Core Components
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">Nginx (Latest)</Badge>
                  <Badge variant="secondary">MariaDB 10.5</Badge>
                  <Badge variant="secondary">PHP 5.6-8.4</Badge>
                  <Badge variant="secondary">ClamAV</Badge>
                  <Badge variant="secondary">ImunifyAV</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-green-600" />
                  Admin Tools
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">phpMyAdmin</Badge>
                  <Badge variant="secondary">PHPMemcachedAdmin</Badge>
                  <Badge variant="secondary">phpRedisAdmin</Badge>
                  <Badge variant="secondary">Rclone</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-purple-600" />
                  Development Tools
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary">WP-CLI</Badge>
                  <Badge variant="secondary">Composer</Badge>
                  <Badge variant="secondary">Supervisor</Badge>
                  <Badge variant="secondary">Let's Encrypt</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Installation</h2>
            <p className="text-xl text-gray-600 mb-8">Get started with TinyPanel in just one command</p>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <code className="text-green-400 text-lg">
                    curl -sO https://tinyactive.github.io/panel/install && chmod +x install && ./install
                  </code>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">System Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Minimum 512MB RAM VPS
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Clean server (no pre-installed services)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Ubuntu 18.04, 20.04, or Debian 10
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Root access required
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">What Gets Installed</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Rocket className="w-4 h-4 text-blue-500 mr-2" />
                        Optimized LEMP stack
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        Security configurations
                      </li>
                      <li className="flex items-center">
                        <Lock className="w-4 h-4 text-red-500 mr-2" />
                        SSL certificates
                      </li>
                      <li className="flex items-center">
                        <Settings className="w-4 h-4 text-purple-500 mr-2" />
                        Management tools
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Start Installation
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Read Full Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Community */}
      <section id="support" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support & Community</h2>
            <p className="text-xl text-gray-600">Get help and connect with the TinyPanel community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  Official Channels
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-sm text-gray-600">hostvn.vn, hostvn.net</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Facebook Community</p>
                      <p className="text-sm text-gray-600">HOSTVN Community Group</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-600">sanvv@hostvn.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                  Contribute & Feedback
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Report Issues</p>
                      <p className="text-sm text-gray-600">GitHub Issues</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Feature Requests</p>
                      <p className="text-sm text-gray-600">Facebook Group</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Code Contributions</p>
                      <p className="text-sm text-gray-600">Pull Requests</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TinyPanel</span>
              </div>
              <p className="text-gray-400 text-sm">
                Fast, secure, and optimized LEMP stack installer for Ubuntu VPS servers.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#installation" className="hover:text-white transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook Group
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contributors
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sanvv - Lead Developer</li>
                <li>Mạnh Tường - Developer</li>
                <li className="pt-2">
                  <p className="text-xs">Based on HOSTVN Scripts</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 TinyPanel - Based on HOSTVN Scripts. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-red-400">⚠️</span> Commercial redistribution or repackaging is strictly prohibited.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
