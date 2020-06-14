import { NativeModules, Platform } from 'react-native';

// export const isSmallDevice = width < 375;
export const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const english = {
    generic_error: "Connection error",
    login: {
        "placeholder:username": "Email",
        "placeholder:password": "Password",
        "new_user": "New user?",
        "link:sign_up": "Sign up!",
        "button:login": "Log in",
        "error:user_not_found": "User does not exist",
        "error:incorrect_password": "Incorrect password"
    }
};

const portuguese = {
    generic_error: "Erro de conexão",
    login: {
        "placeholder:username": "Email",
        "placeholder:password": "Senha",
        "new_user": "Usuário novo?",
        "link:sign_up": "Cadastre-se!",
        "button:login": "Entrar",
        "error:user_not_found": "Usuário não cadastrado",
        "error:incorrect_password": "Senha incorreta"
    }
}

export default deviceLanguage.includes("pt") ? portuguese : english;