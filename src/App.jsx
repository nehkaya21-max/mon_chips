import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ShoppingCart, Phone, Loader, X, Search,
  Award, Target, Users, ShieldCheck, Star
} from 'lucide-react';

// IMPORTS GÉNÉRAUX
import logo from './assets/logo.jpg';
import imageChips from './assets/back_ground.jpeg';
import imgXavier from './assets/xavier.jpeg';
import imgFidele from './assets/doudou.png';
import imgUsineSingrobo from './assets/usine.jpeg';

// IMPORTS PRODUITS
import img100sucre from './assets/100_banane_plantin_sucre.jpeg';
import img100sucre_bis from './assets/100_banane_plantin_sucré(2).jpeg';
import img500patate from './assets/500_patate_douce.jpeg';
import img100patate from './assets/100_patate_douce_special.jpeg';
import img500plantinOriginal from './assets/500_banane_plantin_original.jpeg';
import img500sucre from './assets/500_banane_plantin_sucré.jpeg';
import img100original from './assets/100original.jpg';

import { PRODUITSSTATIQUES as PRODUITS_STATIQUES, INFOS_ENTREPRISE } from './data';

function App() {
  const [pageActive, setPageActive] = useState("accueil");
  const [produitSelectionne, setProduitSelectionne] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [recherche, setRecherche] = useState("");
  const [categorieActive, setCategorieActive] = useState("Tous");

  const mapImagesEquipe = { xavier: imgXavier, fidele: imgFidele };

  const mapPhotosProduits = {
    "100sucre": img100sucre, "100sucre2": img100sucre_bis, "100sucre1": img100sucre_bis,
    "100sucre(3)": img100sucre, "500patate": img500patate, "500patate2": img500patate,
    "100patate": img100patate, "500plantinoriginal": img500plantinOriginal,
    "500sucre3": img500sucre, "500sucre": img500sucre, "100original": img100original,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setChargement(true);
    const timer = setTimeout(() => setChargement(false), 600);
    return () => clearTimeout(timer);
  }, [pageActive]);

  const envoyerCommande = (p) => {
    const numero = "22557350892";
    const msg = `Bonjour Mon Chips Group, je souhaite commander :\n- *${p.nom}*\n- Prix : *${p.prix} FCFA*`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const produitsFiltres = PRODUITS_STATIQUES.filter((p) => {
    const matchNom = p.nom.toLowerCase().includes(recherche.toLowerCase());
    const matchCat = categorieActive === "Tous" || p.categorie === categorieActive;
    return matchNom && matchCat;
  });

  return (
    <div className="site-container">
      <header className="corporate-header">
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo-img" onClick={() => setPageActive('accueil')} style={{ cursor: 'pointer' }} />
          <nav className="corporate-nav">
            <button className={pageActive === 'accueil' ? 'active' : ''} onClick={() => setPageActive('accueil')}>ACCUEIL</button>
            <button className={pageActive === 'propos' ? 'active' : ''} onClick={() => setPageActive('propos')}>LE GROUPE</button>
            <button className={pageActive === 'boutique' ? 'active' : ''} onClick={() => setPageActive('boutique')}>NOS PRODUITS</button>
          </nav>
          <div className="header-actions">
            <div className="social-links-header">
              {/* FACEBOOK */}
              <a href="https://web.facebook.com/etoduma.sarl2020?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>

              

              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/mon.chips?igsh=N2g2bHFmdGkzdDFn" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              {/* TIKTOK */}
              <a href="https://vm.tiktok.com/ZS9RWtFo66TLe-cg5i6/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
            <a href="tel:+2250747244647" className="contact-btn"><Phone size={16} /> 07 47 24 46 47</a>
          </div>
        </div>
      </header>

      {chargement ? <div className="loader-full"><Loader className="spinner" size={40} /></div> : (
        <main>
          {pageActive === "accueil" && (
            <div className="page-fade">
              <section className="hero-v2">
                <div className="hero-content-v2">
                  <span className="hero-label">L'agro-industrie nouvelle génération</span>
                  <h1>Le Goût Unique du <span className="text-yellow">Terroir</span></h1>
                  <p className="hero-slogan">"Mon Chips, tout le monde l'adore !"</p>
                  <p>Mon Chips Group transforme les richesses de Côte d'Ivoire en produits d'exception.</p>
                  <div className="hero-btns-v2">
                    <button className="btn-solid" onClick={() => setPageActive('boutique')}>Acheter en ligne <ShoppingCart size={18} /></button>
                    <button className="btn-ghost" onClick={() => setPageActive('propos')}>Notre impact</button>
                  </div>
                </div>
              </section>

              <section className="why-us-premium">
                <div className="container">
                  <div className="section-intro">
                    <span className="hero-label">Notre Engagement</span>
                    <h2>Pourquoi choisir Mon Chips ?</h2>
                    <div className="small-line-center"></div>
                  </div>
                  <div className="features-grid-v2">
                    <div className="feature-card-v2"><div className="f-icon-wrap"><Star size={35} /></div><div className="f-content"><h3>Qualité Premium</h3><p>Une sélection rigoureuse des meilleurs plantains.Nous privilégions des cultures respectueuses de l'environnement et des sols.</p></div></div>
                    <div className="feature-card-v2"><div className="f-icon-wrap"><ShieldCheck size={35} /></div><div className="f-content"><h3>Hygiène Garantie</h3><p>Processus certifié aux normes internationales.</p></div></div>
                    <div className="feature-card-v2"><div className="f-icon-wrap"><Users size={35} /></div><div className="f-content"><h3>Impact Local</h3><p>Soutien à plus de 100 agricultrices. Création d'emplois durables et valorisation du savoir-faire artisanal.</p></div></div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {pageActive === "propos" && (
            <div className="page-fade">
              <section className="about-hero">
                <div className="container">
                  <span className="hero-label">Identité & Vision</span>
                  <h2>Bâtir l'agro-industrie de demain</h2>
                </div>
              </section>
              <div className="container">
                <section className="mission-vision-grid">
                  <div className="mission-card-premium"><div className="icon-wrap"><Target size={32} /></div><h3>Notre Mission</h3><p>{INFOS_ENTREPRISE.histoire}</p></div>

                  <div className="vision-card-premium">
                    <div className="icon-wrap"><Award size={32} /></div>
                    <h3>Nos Distinctions</h3>
                    <ul className="list-awards">
                      <li>🏆 Lauréat AGRIPITCH BAD 2023</li>
                      <li>🏆 Prix Alassane Ouattara 2020</li>
                      <li>🏆 Subvention USADF 2021</li>
                    </ul>
                    <div className="official-sources">
                      <p className="source-title">Sources officielles :</p>
                      <div className="source-links" translate='no'>
                        <a href="https://share.google/nzHf4zHE8PXmUoKw9" target="_blank" rel="noopener noreferrer" className="source-item">African Development Bank Group (Reportage)</a>
                        <a href="https://share.google/WIV5E6NsXTClr6cvJ" target="_blank" rel="noopener noreferrer" className="source-item">BAD - Impact Agripitch</a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="factory-highlight">
                  <div className="factory-content">
                    <div className="factory-text">
                      <span className="badge-gold">Infrastructure</span>
                      <h3>L'Unité de Singrobo</h3>
                      <p>{INFOS_ENTREPRISE.usine.description}</p>
                    </div>
                    <div className="factory-image"><img src={imgUsineSingrobo || imageChips} alt="Usine" /></div>
                  </div>
                </section>

                <section className="team-section">
                  <div className="section-intro">
                    <h2>Rencontrer l'équipe</h2>
                    <p>L'esprit de l'entreprise</p>
                    <div className="small-line-center"></div>
                  </div>

                  <div className="founders-container-horizontal">
                    {/* Xavier Yao */}
                    <div className="founder-card-horizontal animate-card">
                      <div className="founder-left">
                        <div className="founder-circle-wrap">
                          <img src={mapImagesEquipe['xavier']} alt="Xavier Yao" />
                        </div>
                      </div>
                      <div className="founder-right">
                        <span className="founder-label-top">CO-FONDATEUR</span>
                        <h4>KOFFI AMANI FRANÇOIS XAVIER</h4>
                        <p className="founder-bio">Ingénieur Agribusiness (INP-HB).
                          Expert en développement d'affaires, 
                           Consultant et mentor pour entrepreneurs africains.</p>
                        
                      </div>
                    </div>

                    {/* Fidèle Gbodja */}
                    <div className="founder-card-horizontal animate-card" style={{ animationDelay: '0.2s' }}>
                      <div className="founder-left">
                        <div className="founder-circle-wrap">
                          <img src={mapImagesEquipe['fidele']} alt="Fidèle Gbodja" />
                        </div>
                      </div>
                      <div className="founder-right">
                        <span className="founder-label-top">CO-FONDATEUR</span>
                        <h4>DOUDOU FIDÈLE SAINT JOËL</h4>
                        <p className="founder-bio">Passioné de transformation industriel et Expert en innovation alimentaire, dédié à l'impact social à Singrobo.</p>
                        
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {pageActive === "boutique" && (
            <div className="page-fade container">
              <div className="filter-bar-v2">
                <div className="search-box-v2"><Search size={18} /><input type="text" placeholder="Rechercher..." onChange={e => setRecherche(e.target.value)} /></div>
                <div className="cats-v2">
                  {["Tous", "sucré", "patate douce", "original"].map(c => (
                    <button key={c} className={categorieActive === c ? 'active' : ''} onClick={() => setCategorieActive(c)} style={{ textTransform: 'capitalize' }}>{c}</button>
                  ))}
                </div>
              </div>
              <div className="product-grid">
                {produitsFiltres.map(p => (
                  <div key={p.id} className="p-card-v2" onClick={() => setProduitSelectionne(p)}>
                    <div className="p-img-box"><img src={mapPhotosProduits[p.imagekey] || imageChips} alt={p.nom} /></div>
                    <div className="p-details-v2">
                      <h4>{p.nom}</h4>
                      <p className="p-price-v2">{p.prix} FCFA</p>
                      <button className="btn-order" onClick={(e) => { e.stopPropagation(); envoyerCommande(p) }}><ShoppingCart size={16} /> COMMANDER</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {produitSelectionne && (
        <div className="modal-overlay" onClick={() => setProduitSelectionne(null)}>
          <div className="modal-content-v2" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={() => setProduitSelectionne(null)}><X /></button>
            <div className="m-grid">
              <div className="m-img"><img src={mapPhotosProduits[produitSelectionne.imagekey] || imageChips} alt={produitSelectionne.nom} /></div>
              <div className="m-info">
                <span className="m-badge-cat">{produitSelectionne.categorie}</span>
                <h2>{produitSelectionne.nom}</h2>
                <p className="m-description">{produitSelectionne.description}</p>
                <div className="m-price-tag">{produitSelectionne.prix} FCFA</div>
                <button className="btn-whatsapp" onClick={() => envoyerCommande(produitSelectionne)}>COMMANDER SUR WHATSAPP</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo"><img src={logo} alt="Logo" /><p>L'excellence du plantain.</p></div>
          <div className="footer-contact"><h4>Contact</h4><p>Singrobo, CI</p><p>+225 05 74 15 54 94</p></div>
        </div>
      </footer>
      <a href="https://wa.me/22557350892" className="whatsapp-float" target="_blank" rel="noopener noreferrer"><Phone size={28} /></a>
    </div>
  );
}

export default App;