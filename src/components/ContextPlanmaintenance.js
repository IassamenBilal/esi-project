import React, { Component } from "react";
import plansDeMaintenance from "../plansDemaintenance.json";
import uuid from "uuid/dist/v4";
const PlanDeMaintenanceContext = React.createContext();

class PlanMaintenaceProvider extends Component {
  state = {
    idUser: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    users: [],
    userEmail: "",
    isLogged: false,
    id: "",
    statut: "",
    niveauDeMaintenance: "",
    repeterChaque: "",
    dayAdded: "",
    periode: "",
    repeterEn: {
      dimanche: false,
      lundi: false,
      mardi: false,
      mercredi: false,
      jeudi: false,
    },
    piece: "",
    description: "",
    datedebut: "",
    datefin: "",
    vehicule: "",
    typeDateFin: "date",
    plansDeMaintenance: plansDeMaintenance,
    plansDeMaintenanceFilter: [],
    nbPlan: [],
    plansDeMaintenanceFilterNavbar: [],
    keywords: "",
    alert: {
      show: false,
    },
    edit: false,
    filter: false,

    idVehicule: "",
    matricule: "",
    marque: "",
    modele: "",
    annee: "",
    img: null,
    kilometrage: "",
    etat: "",
    experience: "",
    editVehicule: false,
    filterVehicule: false,
    vehicules: [],
    vehiculesFilter: [],
  };
  // componentDidMount() {
  //   this.setState({
  //     plansDeMaintenance,
  //   });
  // }

  componentWillMount() {
    const plansDeMaintenance = localStorage.getItem("plansdemaintenance")
      ? JSON.parse(localStorage.getItem("plansdemaintenance"))
      : [];
    this.setState({ plansDeMaintenance });
    const vehicules = localStorage.getItem("vehicules")
      ? JSON.parse(localStorage.getItem("vehicules"))
      : [];
    this.setState({ vehicules });
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    this.setState({ users });
    const userEmail = localStorage.getItem("useremail")
      ? JSON.parse(localStorage.getItem("useremail"))
      : "";
    this.setState({ userEmail });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "plansdemaintenance",
      JSON.stringify(nextState.plansDeMaintenance)
    );
    localStorage.setItem("vehicules", JSON.stringify(nextState.vehicules));
    localStorage.setItem("users", JSON.stringify(nextState.users));
    localStorage.setItem("useremail", JSON.stringify(nextState.userEmail));
  }

  setNumberPlan = () => {
    setInterval(() => {
      const date = new Date();
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();
      today = dd + "/" + mm + "/" + yyyy;
      const nb = this.state.plansDeMaintenance.length;
      const PlanDate = { nb, today };
      if (date.getHours > 0) {
        this.setState(() => {
          return {
            nbPlan: [...this.state.nbPlan, PlanDate],
          };
        });
      }
    }, 36000);
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            repeterEn: {
              ...prevState.repeterEn,
              [name]: checked,
            },
          };
        })
      : this.setState(() => {
          return {
            [name]: value,
          };
        });
  };

  handleSubscribe = () => {
    const { email, firstname, lastname, password } = this.state;
    if (email !== "" && firstname !== "" && email !== "" && password !== "") {
      const userExists = () => {
        let user = null;
        user = this.state.users.find((user) => user.email === this.state.email);
        return user == null ? false : true;
      };
      if (!userExists()) {
        const user = {
          idUser: uuid(),
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
        };
        this.setState(() => {
          return {
            users: [...this.state.users, user],
          };
        });
        this.handleAlert({ type: "success", text: "Inscription Réussie" });
      } else {
        this.handleAlert({ type: "danger", text: "Utilisateur existe" });
      }
    } else {
      this.handleAlert({ type: "danger", text: "Remplissez le formulaire " });
    }
  };

  handleLogIn = () => {
    if (this.state.email != "" && this.state.password != "") {
      const user = this.state.users.find(
        (user) => user.email === this.state.email
      );
      if (user.password === this.state.password) {
        this.setState({
          isLogged: true,
          userEmail: this.state.email,
        });
      }
    } else {
      this.handleAlert({
        type: "danger",
        text: "Mot de passe ou email incorrect !",
      });
    }
  };

  handleLogOut = () => {
    this.setState({
      isLogged: false,
    });
    window.location.href = "/";
  };

  handleDisplayUser = () => {
    const user = this.state.users.find(
      (user) => user.email === this.state.userEmail
    );

    return <p>{`${user.firstname} ${user.lastname}`}</p>;
  };

  handleDisplayProfile = () => {
    const user = this.state.users.find(
      (user) => user.email === this.state.userEmail
    );
    this.setState({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
  };
  handleEditProfile = () => {
    const userConnected = this.state.users.find(
      (user) => user.email === this.state.userEmail
    );

    const { firstname, lastname, email, password } = this.state;
    if (firstname != "" && lastname != "" && email != "" && password != "") {
      const users = this.state.users.map((user) =>
        user.email === userConnected.email
          ? {
              ...user,
              firstname,
              lastname,
              email,
              password,
            }
          : user
      );
      this.setState({
        users,
      });
      this.handleAlert({ type: "success", text: "Profile mis à jour !" });
      this.setState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      });
    } else {
      this.handleAlert({ type: "danger", text: "Remplissez le formulaire !" });
    }

    console.log(this.state.users);
  };

  handleAlert = ({ type, text }) => {
    this.setState((prevState) => ({
      alert: { ...prevState.alert, show: true, text: text, type: type },
    }));

    setTimeout(() => {
      this.setState((prevState) => ({
        alert: { ...prevState.alert, show: false },
      }));
    }, 5000);
  };

  handleFilter = () => {
    if (
      this.state.niveauDeMaintenance !== "" ||
      this.state.piece !== "" ||
      this.state.datedebut !== "" ||
      this.state.datefin !== "" ||
      this.state.statut !== "" ||
      this.state.vehicule !== ""
    ) {
      const plansDeMaintenanceFilter = this.state.plansDeMaintenance.filter(
        (plan) => {
          return (
            plan.niveauDeMaintenance.includes(this.state.niveauDeMaintenance) &&
            plan.piece.includes(this.state.piece) &&
            plan.datedebut.includes(this.state.datedebut) &&
            plan.datefin.includes(this.state.datefin) &&
            plan.statut.includes(this.state.statut) &&
            plan.vehicule
              .toLocaleLowerCase()
              .includes(this.state.vehicule.toLocaleLowerCase())
          );
        }
      );

      this.setState({
        plansDeMaintenanceFilter,
        filter: true,
      });
    } else {
      this.handleAlert({ type: "danger", text: "Remplissez les champs !" });
    }
  };

  handleCancelFilter = () => {
    this.setState({
      niveauDeMaintenance: "",
      piece: "",
      datedebut: "",
      datefin: "",
      statut: "",
      vehicule: "",
      filter: false,
    });
  };

  handleClearInputs = () => {
    this.setState({
      niveauDeMaintenance: "",
      repeterChaque: "",
      periode: "",
      vehicule: "",
      repeterEn: {
        dimanche: false,
        lundi: false,
        mardi: false,
        mercredi: false,
        jeudi: false,
      },
      statut: "",
      piece: "",
      description: "",
      datedebut: "",
      datefin: "",
      typeDateFin: "date",
    });
  };

  editPlanMaintenance = (id) => {
    let planDeMaintenance = this.state.plansDeMaintenance.find(
      (plan) => plan.id === id
    );
    const {
      niveauDeMaintenance,
      repeterChaque,
      datedebut,
      datefin,
      piece,
      description,
      periode,
      statut,
      vehicule,
    } = planDeMaintenance;
    const {
      dimanche,
      lundi,
      mardi,
      mercredi,
      jeudi,
    } = planDeMaintenance.repeterEn;
    this.setState({
      id: id,
      statut: statut,
      niveauDeMaintenance: niveauDeMaintenance,
      repeterChaque: repeterChaque,
      periode: periode,
      repeterEn: {
        dimanche: dimanche,
        lundi: lundi,
        mardi: mardi,
        mercredi: mercredi,
        jeudi: jeudi,
      },
      piece: piece,
      description: description,
      datedebut: datedebut,
      datefin: datefin,
      vehicule: vehicule,
      edit: true,
    });
  };
  addPlanMaintenance = () => {
    if (
      this.state.niveauDeMaintenance !== "" &&
      this.state.repeterChaque !== "" &&
      this.state.piece !== "" &&
      this.state.datedebut !== "" &&
      this.state.datefin !== "" &&
      this.state.periode !== "" &&
      this.state.vehicule !== "" &&
      (this.state.repeterEn.dimanche !== false ||
        this.state.repeterEn.lundi !== false ||
        this.state.repeterEn.mardi !== false ||
        this.state.repeterEn.mercredi !== false ||
        this.state.repeterEn.jeudi !== false)
    ) {
      if (this.state.edit) {
        let {
          niveauDeMaintenance,
          repeterChaque,
          periode,
          piece,
          description,
          datedebut,
          datefin,
          statut,
          vehicule,
        } = this.state;
        let { dimanche, lundi, mardi, mercredi, jeudi } = this.state.repeterEn;
        const repeterEn = {
          dimanche: dimanche,
          lundi: lundi,
          mardi: mardi,
          mercredi: mercredi,
          jeudi: jeudi,
        };
        let plansDeMaintenance = this.state.plansDeMaintenance.map((plan) => {
          return plan.id === this.state.id
            ? {
                ...plan,
                niveauDeMaintenance,
                repeterChaque,
                piece,
                periode,
                description,
                datedebut,
                datefin,
                repeterEn,
                statut,
                vehicule,
              }
            : plan;
        });
        this.setState({
          plansDeMaintenance: plansDeMaintenance,
          edit: false,
        });
        this.handleAlert({
          type: "success",
          text: "Action de maintenance modifiée avec succès",
        });
      } else {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        const {
          dimanche,
          lundi,
          mardi,
          mercredi,
          jeudi,
        } = this.state.repeterEn;
        const planDeMaintenance = {
          id: uuid(),
          niveauDeMaintenance: this.state.niveauDeMaintenance,
          repeterChaque: this.state.repeterChaque,
          periode: this.state.periode,
          repeterEn: {
            dimanche: dimanche,
            lundi: lundi,
            mardi: mardi,
            mercredi: mercredi,
            jeudi: jeudi,
          },
          statut: "En cours",
          piece: this.state.piece,
          description: this.state.description,
          datedebut: this.state.datedebut,
          datefin: this.state.datefin,
          vehicule: this.state.vehicule,
          dayAdded: today,
        };

        this.setState((prevState) => {
          return {
            plansDeMaintenance: [
              ...this.state.plansDeMaintenance,
              planDeMaintenance,
            ],
          };
        });
        this.handleAlert({
          type: "success",
          text: "Action de maintenance ajoutée avec succès",
        });
      }
      this.setState({
        niveauDeMaintenance: "",
        repeterChaque: "",
        periode: "",
        statut: "",
        vehicule: "",
        repeterEn: {
          dimanche: false,
          lundi: false,
          mardi: false,
          mercredi: false,
          jeudi: false,
        },
        piece: "",
        description: "",
        datedebut: "",
        datefin: "",
        typeDateFin: "date",
        filter: false,
      });
    } else {
      this.handleAlert({
        type: "danger",
        text: "Remplissez les champs !",
      });
    }
    // localStorage.setItem(
    //   "plansdemaintenance",
    //   JSON.stringify(this.state.plansDeMaintenance)
    // );
  };

  deletePlanMaintenance = (id) => {
    const plansDeMaintenance = this.state.plansDeMaintenance.filter(
      (p) => p.id !== id
    );
    this.setState({
      plansDeMaintenance,
      filter: false,
    });
    this.handleAlert({
      type: "success",
      text: "Action de maintenance supprimée avec succès",
    });
    this.handleClearInputs();
    // localStorage.setItem(
    //   "plansdemaintenance",
    //   JSON.stringify(this.state.plansDeMaintenance)
    // );
  };
  handleCancelPlan = () => {
    this.setState({
      niveauDeMaintenance: "",
      repeterChaque: "",
      periode: "",
      statut: "",
      repeterEn: {
        dimanche: false,
        lundi: false,
        mardi: false,
        mercredi: false,
        jeudi: false,
      },
      piece: "",
      vehicule: "",
      description: "",
      datedebut: "",
      datefin: "",
      typeDateFin: "date",
      edit: false,
    });
  };
  handleFilterNavBar = (e) => {
    let keywords = e.target.value;
    let plansDeMaintenanceFilterNavbar = this.state.plansDeMaintenance.filter(
      (plan) => {
        return (
          plan.niveauDeMaintenance.includes(keywords) ||
          plan.piece
            .toLocaleLowerCase()
            .includes(keywords.toLocaleLowerCase()) ||
          plan.datedebut.includes(keywords) ||
          plan.vehicule
            .toLocaleLowerCase()
            .includes(keywords.toLocaleLowerCase()) ||
          plan.statut
            .toLocaleLowerCase()
            .includes(keywords.toLocaleLowerCase()) ||
          plan.description
            .toLocaleLowerCase()
            .includes(keywords.toLocaleLowerCase())
        );
      }
    );

    this.setState({
      plansDeMaintenanceFilterNavbar,
      keywords,
    });
  };
  handleCancelFilterNavBar = () => {
    this.setState({
      plansDeMaintenanceFilterNavbar: [],
      keywords: "",
    });
  };
  // getPlanMaintenance = (id) => {
  //   return this.state.plansDeMaintenance.find((plan) => plan.id === id);
  // };
  // handleDipslayPlanMaintenance = (id) => {
  //   const plan = this.getPlanMaintenance(id);
  //   this.setState(() => {
  //     return {
  //       planManintenance: plan,
  //     };
  //   });
  // };
  handleLoadVehiculeImg = (e) => {
    const currentFile = e.target.files[0];

    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({
          img: reader.result,
        });
      },
      false
    );
    reader.readAsDataURL(currentFile);
  };
  addVehicule = () => {
    if (
      this.state.matricule !== "" &&
      this.state.marque !== "" &&
      this.state.modele !== "" &&
      this.state.annee !== "" &&
      this.state.kilometrage !== ""
    ) {
      if (this.state.editVehicule) {
        let {
          matricule,
          marque,
          modele,
          annee,
          kilometrage,
          etat,
        } = this.state;

        let vehicules = this.state.vehicules.map((vehicule) => {
          return vehicule.idVehicule === this.state.idVehicule
            ? {
                ...vehicule,
                matricule,
                marque,
                modele,
                annee,
                kilometrage,
                etat,
              }
            : vehicule;
        });
        this.setState({
          vehicules: vehicules,
          editVehicule: false,
        });
        this.handleAlert({
          type: "success",
          text: "Véhicule modifié avec succès",
        });
      } else {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        const vehicule = {
          idVehicule: uuid(),
          matricule: this.state.matricule,
          marque: this.state.marque,
          modele: this.state.modele,
          dayAdded: today,
          etat: "En marche",
          annee: this.state.annee,
          experience: "",
          img: this.state.img,
          kilometrage: this.state.kilometrage,
        };

        this.setState((prevState) => {
          return {
            vehicules: [...this.state.vehicules, vehicule],
          };
        });
        this.handleAlert({
          type: "success",
          text: "Véhicule  ajouté avec succès",
        });
      }
      this.setState({
        matricule: "",
        marque: "",
        modele: "",
        annee: "",
        etat: "",
        kilometrage: "",
        experience: "",

        filterVehicule: false,
      });
    } else {
      this.handleAlert({
        type: "danger",
        text: "Remplissez les champs !",
      });
    }
  };
  editVehicule = (id) => {
    let vehicule = this.state.vehicules.find(
      (vehicule) => vehicule.idVehicule === id
    );
    const {
      matricule,
      marque,
      modele,
      annee,
      kilometrage,
      etat,
      experience,
    } = vehicule;

    this.setState({
      idVehicule: id,
      etat: etat,
      matricule: matricule,
      marque: marque,
      modele: modele,
      kilometrage: kilometrage,
      experience: experience,
      annee: annee,
      editVehicule: true,
    });
  };

  deleteVehicule = (id) => {
    const vehicules = this.state.vehicules.filter((v) => v.idVehicule !== id);
    this.setState({
      vehicules,
      filterVehicule: false,
    });
    this.handleAlert({
      type: "success",
      text: "Véhicule supprimé avec succès",
    });
  };

  handleFilterVehicule = () => {
    if (
      this.state.matricule !== "" ||
      this.state.marque !== "" ||
      this.state.modele !== "" ||
      this.state.annee !== "" ||
      this.state.kilometrage !== "" ||
      this.state.etat !== ""
    ) {
      const vehiculesFilter = this.state.vehicules.filter((v) => {
        return (
          v.matricule.includes(this.state.matricule) &&
          v.marque
            .toLocaleLowerCase()
            .includes(this.state.marque.toLocaleLowerCase()) &&
          v.modele
            .toLocaleLowerCase()
            .includes(this.state.modele.toLocaleLowerCase()) &&
          v.annee.includes(this.state.annee) &&
          v.etat.includes(this.state.etat) &&
          v.kilometrage.includes(this.state.kilometrage)
        );
      });

      this.setState({
        vehiculesFilter,
        filterVehicule: true,
      });
    } else {
      this.handleAlert({ type: "danger", text: "Remplissez les champs !" });
    }
  };

  handleCancelFilterVehicule = () => {
    this.setState({
      matricule: "",
      marque: "",
      modele: "",
      annee: "",
      etat: "",
      kilometrage: "",
      filterVehicule: false,
    });
  };

  handleUploadvehicule = (e) => {
    const currentFile = e.target.files[0];

    let reader = new FileReader();
    let src;
    reader.addEventListener(
      "load",
      () => {
        src = reader.result;
        console.log(src);
      },
      false
    );
    reader.readAsText(currentFile);
  };

  handleDisplayDashboardVehicule = () => {
    const vehiculesEnMarche = this.state.vehicules.filter(
      (v) => v.etat === "En marche"
    );
    const vehiculesEnPanne = this.state.vehicules.filter(
      (v) => v.etat != "En marche"
    );

    return [vehiculesEnMarche.length, vehiculesEnPanne.length];
  };
  handleDisplayDashboardPlan = () => {
    const planEnCours = this.state.plansDeMaintenance.filter(
      (v) => v.statut === "En cours"
    );
    const planTermine = this.state.plansDeMaintenance.filter(
      (v) => v.statut === "Termine"
    );
    const planArret = this.state.plansDeMaintenance.filter(
      (v) => v.statut === "Arrete"
    );
    const planPause = this.state.plansDeMaintenance.filter(
      (v) => v.statut === "En pause"
    );

    return [
      planEnCours.length,
      planTermine.length,
      planArret.length,
      planPause.length,
    ];
  };
  handleDisplayDashboardPlanNiveau = () => {
    const plan1 = this.state.plansDeMaintenance.filter(
      (v) => v.niveauDeMaintenance === "1"
    );
    const plan2 = this.state.plansDeMaintenance.filter(
      (v) => v.niveauDeMaintenance === "2"
    );
    const plan3 = this.state.plansDeMaintenance.filter(
      (v) => v.niveauDeMaintenance === "3"
    );
    const plan4 = this.state.plansDeMaintenance.filter(
      (v) => v.niveauDeMaintenance === "4"
    );
    const plan5 = this.state.plansDeMaintenance.filter(
      (v) => v.niveauDeMaintenance === "5"
    );

    return [
      plan1.length,
      plan2.length,
      plan3.length,
      plan4.length,
      plan5.length,
    ];
  };
  render() {
    return (
      <PlanDeMaintenanceContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          addPlanMaintenance: this.addPlanMaintenance,
          deletePlanMaintenance: this.deletePlanMaintenance,
          handleDipslayPlanMaintenance: this.handleDipslayPlanMaintenance,
          handleAlert: this.handleAlert,
          editPlanMaintenance: this.editPlanMaintenance,
          handleCancelPlan: this.handleCancelPlan,
          handleFilter: this.handleFilter,
          handleCancelFilter: this.handleCancelFilter,
          handleClearInputs: this.handleClearInputs,
          addVehicule: this.addVehicule,
          editVehicule: this.editVehicule,
          deleteVehicule: this.deleteVehicule,
          handleLoadVehiculeImg: this.handleLoadVehiculeImg,
          handleFilterVehicule: this.handleFilterVehicule,
          handleCancelFilterVehicule: this.handleCancelFilterVehicule,
          handleFilterNavBar: this.handleFilterNavBar,
          handleCancelFilterNavBar: this.handleCancelFilterNavBar,
          handleSubscribe: this.handleSubscribe,
          handleLogIn: this.handleLogIn,
          handleDisplayUser: this.handleDisplayUser,
          handleLogOut: this.handleLogOut,
          handleDisplayProfile: this.handleDisplayProfile,
          handleEditProfile: this.handleEditProfile,
          handleUploadvehicule: this.handleUploadvehicule,
          handleDisplayDashboardVehicule: this.handleDisplayDashboardVehicule,
          handleDisplayDashboardPlan: this.handleDisplayDashboardPlan,
          handleDisplayDashboardPlanNiveau: this
            .handleDisplayDashboardPlanNiveau,
        }}
      >
        {this.props.children}
      </PlanDeMaintenanceContext.Provider>
    );
  }
}

const PlanDeMaintenanceConsumer = PlanDeMaintenanceContext.Consumer;

export { PlanMaintenaceProvider, PlanDeMaintenanceConsumer };
