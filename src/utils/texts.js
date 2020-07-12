import { NativeModules, Platform } from 'react-native';

export const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const english = {
    generic_error: "Connection error",

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

    // Profile
    "profile:title": "My info",
}

const portuguese = {
    generic_error: "Erro de conexão",

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

    // Profile
    "profile:title": "Meus dados",
}

export default deviceLanguage.includes("pt") ? portuguese : english;