import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Users, BookOpen, Award, ArrowRight, Phone, Mail, MapPin, Settings, Briefcase, ChartLine, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">PROTEACH</h1>
                <p className="text-sm text-muted-foreground">ITSM Training & Consulting</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#xidmetler" className="text-muted-foreground hover:text-primary transition-colors">Xidmətlər</a>
              <a href="#haqqimizda" className="text-muted-foreground hover:text-primary transition-colors">Haqqımızda</a>
              <a href="#meqaleler" className="text-muted-foreground hover:text-primary transition-colors">Məqalələr</a>
              <a href="#elaqe" className="text-muted-foreground hover:text-primary transition-colors">Əlaqə</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            ITSM Konsultasiya və <br />
            <span className="text-primary">Korporativ Təlimlər</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Şirkətinizi ITSM (IT Service Management) transformasiyası yolunda irəliyə aparan peşəkar konsultasiya xidmətləri və əməkdaşlarınızın ITIL, Service Desk və prosess idarəetməsi bacarıqlarını inkişaf etdirən keyfiyyətli təlim proqramları.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              ITSM Konsultasiya Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              ITIL Təlim Proqramları
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="xidmetler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">ITSM Xidmətlərimiz</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              IT Service Management sahəsində müasir biznes ehtiyaclarına uyğun geniş spektrli həlləri və təlim xidmətləri təklif edirik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ITSM Konsultasiya</CardTitle>
                <CardDescription>
                  ITIL, Service Desk strategiyası, prosess idarəetməsi və ITSM transformasiyası üzrə ekspert məsləhətləri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ITIL 4 implementasiyası</li>
                  <li>• Service Desk təkmilləşdirməsi</li>
                  <li>• ITSM proseslərinin optimallaşdırması</li>
                  <li>• Change və Incident Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ITIL Təlimlər</CardTitle>
                <CardDescription>
                  ITIL sertifikatlaşdırması və ITSM əməkdaşlarının peşəkar inkişafı üçün fərdiləşdirilmiş təlim proqramları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ITIL 4 Foundation sertifikatı</li>
                  <li>• Service Desk təlimləri</li>
                  <li>• Problem və Change Management</li>
                  <li>• ITSM tools təlimləri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ITSM Alətləri</CardTitle>
                <CardDescription>
                  ServiceNow, Remedy, Jira Service Management və digər ITSM platformalarının konfiqurasiyası və təlimi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ServiceNow implementasiyası</li>
                  <li>• ITSM alətlərinin konfiqurasiyası</li>
                  <li>• Workflow dizaynı və optimallaşdırma</li>
                  <li>• Reporting və analitika</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="haqqimizda" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ITSM Sahəsində 15+ İllik Təcrübə
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Komandamız müxtəlif sektorlarda ITSM proseslərinin implementasiyası və inkişafında fəaliyyət göstərmiş ITIL sertifikatlaşdırılmış peşəkar mütəxəssislərdən ibarətdir. Məqsədimiz hər müştəriyə ITSM best practice-lərini tətbiq edərək xidmət keyfiyyətini artırmaqdır.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">ITSM Layihəsi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75+</div>
                  <div className="text-muted-foreground">ITIL Sertifikatı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8000+</div>
                  <div className="text-muted-foreground">Təlim Saatı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Sertifikat Uğuru</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8">
              <Award className="h-16 w-16 text-primary mb-6" />
              <h4 className="text-2xl font-bold mb-4">ITIL & ITSM Ekspertizamız</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  ITIL 4 Expert və Master sertifikatlaşdırılmış trenerlərimiz
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Fortune 500 şirkətlərində ITSM implementasiya təcrübəsi
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  ServiceNow və Remedy certified məsləhətçilərimiz
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Nəticə əsaslı ITSM maturity artırma metodikamız
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="meqaleler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">ITSM Məqalələri və Resurslar</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ITSM, ITIL və Service Management sahələrində ən son təcrübələri və best practice-ləri paylaşırıq
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">ITIL 4-ün Əsas Prinsipləri</CardTitle>
                <CardDescription>
                  ITIL 4 framework-ünün əsas prinsipləri və müasir IT xidmət idarəetməsindəki rolu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>5 dəq oxu</span>
                  <span>ITIL</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <ChartLine className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Service Desk KPI-ləri</CardTitle>
                <CardDescription>
                  Effektiv Service Desk fəaliyyətini ölçmək üçün əsas performans göstəriciləri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>8 dəq oxu</span>
                  <span>Metrics</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <Settings className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Change Management Best Practices</CardTitle>
                <CardDescription>
                  IT dəyişikliklərini effektiv idarə etmək üçün ITIL əsaslı yanaşmalar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>12 dəq oxu</span>
                  <span>Process</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <Monitor className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">ServiceNow Implementation Guide</CardTitle>
                <CardDescription>
                  ServiceNow platformasının uğurlu implementasiyası üçün addım-addım təlimat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>15 dəq oxu</span>
                  <span>Tools</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">ITIL Sertifikatlaşdırma Yolu</CardTitle>
                <CardDescription>
                  ITIL 4 sertifikatlaşdırma mərhələləri və karyera inkişafı təklifləri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>10 dəq oxu</span>
                  <span>Career</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 rounded-t-lg flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">ITSM Komanda Quruculuğu</CardTitle>
                <CardDescription>
                  Uğurlu ITSM komandası yaratmaq və inkişaf etdirmək üçün praktiki məsləhətlər
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>7 dəq oxu</span>
                  <span>Team Building</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Bütün Məqalələrə Bax
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="elaqe" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Bizimlə Əlaqə</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Layihənizi müzakirə etmək və sizə uyğun həlləri kəşf etmək üçün bizə müraciət edin
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+994 50 123 45 67</p>
                    <p className="text-muted-foreground">+994 12 456 78 90</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">info@techconsult.az</p>
                    <p className="text-muted-foreground">training@techconsult.az</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Ünvan</h4>
                    <p className="text-muted-foreground">
                      Bakı şəhəri, Nəsimi rayonu<br />
                      Azadlıq prospekti 12, Mərtəbə 5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mesaj Göndərin</CardTitle>
                <CardDescription>
                  Suallarınızı və ya layihə təkliflərinizi bizə göndərin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ad Soyad</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Adınızı daxil edin"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Şirkət</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Şirkət adı"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mövzu</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>İT Konsultasiya</option>
                      <option>Korporativ Təlimlər</option>
                      <option>Online Təlim Platforması</option>
                      <option>Digər</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mesaj</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Mesajınızı daxil edin..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Mesaj Göndər
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-bold">TechConsult</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                İT konsultasiya və korporativ təlimlər sahəsində etibarlı tərəfdaşınız.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Xidmətlər</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>İT Konsultasiya</li>
                <li>Korporativ Təlimlər</li>
                <li>Online Təlim</li>
                <li>Sertifikatlaşdırma</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Şirkət</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Haqqımızda</li>
                <li>Komandamız</li>
                <li>Karyera</li>
                <li>Bloq</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Əlaqə</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+994 50 123 45 67</li>
                <li>info@techconsult.az</li>
                <li>Bakı, Azadlıq pr. 12</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 TechConsult. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
