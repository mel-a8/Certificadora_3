const firebaseErrors = {
  "auth/invalid-email": "O e-mail informado é inválido.",
  "auth/missing-password": "Digite sua senha.",
  "auth/wrong-password": "Senha incorreta. Tente novamente.",
  "auth/user-not-found": "Usuário não encontrado.",
  "auth/invalid-credential": "Credenciais inválidas. Verifique e tente novamente.",
  "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
  "auth/email-already-in-use": "Este e-mail já está sendo usado.",
};

export function traduzirErroFirebase(errorCode) {
  return firebaseErrors[errorCode] || "Ocorreu um erro inesperado. Tente novamente.";
}
