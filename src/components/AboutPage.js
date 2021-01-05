import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

export default function AboutPage() {
  return (
    <div className="content">
      <TopNavBar />
      <SideNavBar />
      <div className="section">
        <h2>Aide</h2>
        <div className="about-content">
          <div className="about-page-text">
            <div className="about-title">
              <i
                className="fa fa-star"
                style={{ color: "#333347", fontSize: 20, marginTop: 3 }}
              ></i>
              <h4>L'application LGPA</h4>
            </div>

            <p>LGPA est une application de gestion de parc automobile </p>
          </div>
          <div className="about-page-text">
            <div className="about-title">
              <i
                className="fa fa-star"
                style={{ color: "#333347", fontSize: 20, marginTop: 3 }}
              ></i>
              <h4>Fonctionnalités</h4>
            </div>
            <div className="about-funct" style={{ marginLeft: 15 }}>
              <div className="about-funct-title">
                <i
                  className="fa fa-arrow-right"
                  style={{
                    color: "#333347",
                    fontSize: 15,
                    marginTop: 5,
                    paddingRight: 5,
                  }}
                ></i>
                <h5>Accueil :</h5>
              </div>
              <p>
                L'accueil affiche les dernière actions action de maintenance
                ajoutées .
              </p>
            </div>
            <div className="about-funct" style={{ marginLeft: 15 }}>
              <div className="about-funct-title">
                <i
                  className="fa fa-arrow-right"
                  style={{
                    color: "#333347",
                    fontSize: 15,
                    marginTop: 5,
                    paddingRight: 5,
                  }}
                ></i>
                <h5>Gestion des véhicules :</h5>
              </div>
              <p>
                - La page gestion des véhiclues permet d'ajouter des véhicules
                ou d'importer une liste de véhicules selon le choix de
                l'utilisateur Grâce au bouton <strong>Ajouter véhicule </strong>
                vous pouvez ajouter un véhicule en remplissant le formulaire
                ,Puis cliquer sur le bouton <strong>Ajouter</strong> pour
                valider le choix d'ajout .
              </p>
              <p>
                - Vous pouvez aussi modifier un véhicule grâce au bouton de
                modification .
              </p>
              <p>- Enfin vous pouvez supprimer un véhicule .</p>
            </div>
            <div className="about-funct" style={{ marginLeft: 15 }}>
              <div className="about-funct-title">
                <i
                  className="fa fa-arrow-right"
                  style={{
                    color: "#333347",
                    fontSize: 15,
                    marginTop: 5,
                    paddingRight: 5,
                  }}
                ></i>
                <h5>Les actions de maintenance :</h5>
              </div>
              <p>
                - La page actions de maintenance permet d'ajouter des actions de
                maintenance Grâce au bouton{" "}
                <strong>Ajouter action de maintenance </strong>
                vous pouvez ajouter une action de maintenance en remplissant le
                formulaire ,Puis cliquer sur le bouton <strong>
                  Créer
                </strong>{" "}
                pour valider le choix de création .
              </p>
              <p>
                - Vous pouvez aussi modifier une action de maintenance grâce au
                bouton de modification .
              </p>
              <p>- Enfin vous pouvez supprimer une action de maintenance .</p>
            </div>
            <div className="about-funct" style={{ marginLeft: 15 }}>
              <div className="about-funct-title">
                <i
                  className="fa fa-arrow-right"
                  style={{
                    color: "#333347",
                    fontSize: 15,
                    marginTop: 5,
                    paddingRight: 5,
                  }}
                ></i>
                <h5>Plan de maintenance :</h5>
              </div>
              <p>
                - La page plan de maintenance affiche des actions de maintenance
                ajoutées dans un calendrier .
              </p>
            </div>
            <div className="about-funct" style={{ marginLeft: 15 }}>
              <div className="about-funct-title">
                <i
                  className="fa fa-arrow-right"
                  style={{
                    color: "#333347",
                    fontSize: 15,
                    marginTop: 5,
                    paddingRight: 5,
                  }}
                ></i>
                <h5>Tableau de bord :</h5>
              </div>
              <p>
                - La page tableau de bord affiche les differentes statistiques
                de nombre d'actions de maintenance ajoutées , le nombre de
                véhicule an etat de marche... sous forme de graphes .
              </p>
            </div>
          </div>
          <div className="about-contact">
            <i
              className="fa fa-facebook-square"
              style={{
                color: "#43425d",
                fontSize: 30,
                cursor: "pointer",
                marginRight: 10,
              }}
            ></i>
            <i
              className="fa fa-google"
              style={{
                color: "#43425d",
                fontSize: 30,
                cursor: "pointer",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
