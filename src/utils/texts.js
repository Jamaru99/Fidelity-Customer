import { NativeModules, Platform } from 'react-native';

export const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const english = {
    generic_error: "Connection error",
    points: "points",
    cancel: "Cancel",

    // Login
    "login:title": "Login",
    "login:placeholder:username": "Email",
    "login:placeholder:password": "Password",
    "login:new_user": "New user?",
    "login:link:sign_up": "Sign up!",
    "login:button:login": "LOG IN",
    "login:error:user_not_found": "Email not registered",
    "login:error:incorrect_password": "Incorrect password",

    // Register
    "register:title": "New user",
    "register:placeholder:username": "Email *",
    "register:placeholder:name": "Name *",
    "register:placeholder:password": "Password *",
    "register:placeholder:confirm_password": "Confirm password *",
    "register:button:sign_up": "SIGN UP",

    // Card List
    "card_list:title": "My cards",
    "card_list:no_cards": "You don't have any fidelity cards yet. Request it at the desired establisment.",

    // Camera QR
    "camera_qr:title": "QR code reader",
    "camera_qr:requesting_permission": "Requesting for camera permission",
    "camera_qr:no_permission": "Camera permission is not granted",

    // Profile
    "profile:title": "My info",
    "profile:save_button": "SAVE",
    "profile:password_button": "Change password",
    "profile:logout_button": "LOG OUT",
    "profile:password_updated": "Password updated!",
    "profile:password_error": "Ops! Something went wrong",

    // Card Detail
    "card_detail:advice_1": "You earned",
    "card_detail:advice_2": "points in the card of company",
    "card_detail:advice_3": " Get",
    "card_detail:advice_4": "more to win the offered prize!",
}

const portuguese = {
    generic_error: "Erro de conexão",
    points: "pontos",
    cancel: "Cancelar",

    // Login
    "login:placeholder:username": "Email",
    "login:placeholder:password": "Senha",
    "login:new_user": "Usuário novo?",
    "login:link:sign_up": "Cadastre-se!",
    "login:button:login": "ENTRAR",
    "login:error:user_not_found": "Email não cadastrado",
    "login:error:incorrect_password": "Senha incorreta",

    // Register
    "register:title": "Novo usuário",
    "register:placeholder:username": "Email *",
    "register:placeholder:name": "Nome *",
    "register:placeholder:password": "Senha *",
    "register:placeholder:confirm_password": "Confirmar senha *",
    "register:button:sign_up": "Cadastrar",

    // Card List
    "card_list:title": "Meus cartões",
    "card_list:no_cards": "Você ainda não possui cartões fidelidade. Solicite o QR code no estabelecimento.",

    // Camera QR
    "camera_qr:title": "QR code reader",
    "camera_qr:requesting_permission": "Solicitando permissão da câmera...",
    "camera_qr:no_permission": "Permissão da câmera não concedida.",

    // Profile
    "profile:title": "Meus dados",
    "profile:save_button": "SALVAR",
    "profile:password_button": "Alterar senha",
    "profile:logout_button": "SAIR",
    "profile:password_updated": "Senha alterada!",
    "profile:password_error": "Ops! Não deu certo...",

    // Card Detail
    "card_detail:advice_1": "Você conseguiu",
    "card_detail:advice_2": "pontos no cartão da empresa",
    "card_detail:advice_3": " Consiga mais",
    "card_detail:advice_4": "para ganhar o prêmio oferecido!",
}

export default deviceLanguage.includes("pt") ? portuguese : english;