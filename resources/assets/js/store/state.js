import conteudo from "./models/conteudo";

const state = {
  conteudos: [],
  paginator: {},
  conteudo,
  aplicativos: [],
  aplicativo: {},
  canal: {},
  sidebar: {},
  categories: [],
  temas: [],
  disciplinas: [],
  components: [],
  licenses: [],
  tipos: [],
  license: "",
  tipo: "",
  showErrors: false,
  isTipoSite: false,
  niveis: [],
  menssage: "",
  //title: "",
  show: false,
  isError: false,
  isLogged: !!localStorage.token,
  errors: {},
  alertText: "",
  showAlert: false,
  showConteudo: false,
  showApllicativo: false,
  formData: {},
  buttonText: "Salvar",
  notFound: false,
  action: ""
};

export default state;
