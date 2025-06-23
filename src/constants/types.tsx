export type themet = {
    backgroundBox: string
    backgroundGeneral: string
    color: string
    backTotal: string,
    backIncome: string
    backExpense: string
    backButton: string,
    lineTable: string,
    backModal: string,
    backBoxModal: string

}
export type line = {
    id: number,
    date: string,
    description: string,
    category: string,
    type: string,
    amount: number,
}

export type language = {
  Pages: {
    Translation: {
      title: string;
      button: string;
    };
    Settings: {
      title: string;
    };
    Dashboard: {
      title: string;
      totalBalance: string;
      income: string;
      expense: string;
    };
  };
  Components: {
    DoughnutGraphic: {
      label: string;
    };
    GeneralPref: {
      title: string;
      setTheme: string;
      setLanguage: string;
      english: string;
      portuguese: string;
    };
    GraphicBox: {
      title: string;
      alimentation: string;
      fixedBills: string;
      others: string;
    };
    GraphicInLineBox: {
      title: string;
    };
    LineGraphic: {
      label: string;
    };
    LineTable:{
      freelancer: string,
      others: string,
      fixedBills: string,
      alimentation: string
      income: string,
      expense: string
    };
    Modal: {
      title: string;
      amount: string;
      category: string;
      description: string;
      cancel: string;
      save: string;
    };
    ModalItemChoose: {
      select: string;
      freelancer: string;
      others: string;
      fixedBills: string;
      alimentation: string;
    };
    TypeTransaction: {
      title: string;
      income: string;
      expense: string;
    };
    SideBar: {
      title: string;
      dashboard: string;
      transaction: string;
      settings: string;
    };
    TableDashBoard: {
      date: string;
      description: string;
      category: string;
      type: string;
      amount: string;
    };
  };
};
