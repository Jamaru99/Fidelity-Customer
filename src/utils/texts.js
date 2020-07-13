import { NativeModules, Platform } from 'react-native';

export const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const english = {
    generic_error: "Connection error",
    points: "points",

    // Login
    "login:title": "Login",
    "login:placeholder:username": "Email",
    "login:placeholder:password": "Password",
    "login:new_user": "New user?",
    "login:link:sign_up": "Sign up!",
    "login:button:login": "Log in",
    "login:error:user_not_found": "User does not exist",
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

    // Card Detail
    "card_detail:advice_1": "You earned",
    "card_detail:advice_2": "points in the card of company",
    "card_detail:advice_3": " Get",
    "card_detail:advice_4": "to win the offered prize!",
}

const portuguese = {
    generic_error: "Erro de conexão",
    points: "pontos",

    // Login
    "login:placeholder:username": "Email",
    "login:placeholder:password": "Senha",
    "login:new_user": "Usuário novo?",
    "login:link:sign_up": "Cadastre-se!",
    "login:button:login": "Entrar",
    "login:error:user_not_found": "Usuário não cadastrado",
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

    // Card Detail
    "card_detail:advice_1": "Você conseguiu",
    "card_detail:advice_2": "pontos no cartão da empresa",
    "card_detail:advice_3": " Consiga mais",
    "card_detail:advice_4": "para ganhar o prêmio oferecido!",

}

export default deviceLanguage.includes("pt") ? portuguese : english;