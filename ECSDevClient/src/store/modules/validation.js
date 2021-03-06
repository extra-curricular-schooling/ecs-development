/**
 * @description
 * store for validation
 */

/*eslint-disable */
export const validation = {
  state: {
    // Regular Expressions
    nameRegex: Object.freeze(/^[a-zA-Z'`.\- ]{1,50}$/),
    usernameRegex: Object.freeze(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,120}$/),
    passwordRegex: Object.freeze(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_])[a-zA-Z0-9~!@#$%^&*()_]{8,64}$/),
    emailRegex: Object.freeze(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    addressRegex: Object.freeze(/^[a-zA-Z0-9#.,-/ ]{0,}$/),
    cityRegex: Object.freeze(/^[a-zA-Z ]{0,}$/),
    zipCodeRegex: Object.freeze(/^\d{5}(?:[-\s]\d{4})?$/),

    // Validation Messages
    nameMessage: Object.freeze('Sorry, the name you entered either contains invalid characters or is too long.'),
    usernameMessage: Object.freeze('Username must be 8-120 characters long, must not contain any spaces, must not contain any special characters, and must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number.'),
    passwordMessage: Object.freeze('Password must be 8-64 characters long, must not contain any spaces, and must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.'),
    confirmPasswordMessage: Object.freeze('Retype Password.'),
    emailMessage: Object.freeze('Email is not a valid email.'),
    addressMessage: Object.freeze('The address you entered contains invalid characters.'),
    cityMessage: Object.freeze('The city you entered contains invalid characters.'),
    zipCodeMessage: Object.freeze('ZIP Code must be a valid ZIP Code'),
    answersMessage: Object.freeze('Please provide answers to all questions.'),
    specialCharacters: Object.freeze('~ ! @ # $ % ^ & * ( ) _')
  },
  getters: {
    // Get regular expressions
    getNameRegex: (state) => { return state.nameRegex },
    getUsernameRegex: (state) => { return state.usernameRegex },
    getPasswordRegex: (state) => { return state.passwordRegex },
    getEmailRegex: (state) => { return state.emailRegex },
    getAddressRegex: (state) => { return state.addressRegex },
    getCityRegex: (state) => { return state.cityRegex },
    getZipCodeRegex: (state) => { return state.zipCodeRegex },

    // Get messages
    getNameMessage: (state) => { return state.nameMessage },
    getUsernameMessage: (state) => { return state.usernameMessage },
    getPasswordMessage: (state) => { return state.passwordMessage },
    getConfirmPasswordMessage: (state) => { return state.confirmPasswordMessage },
    getEmailMessage: (state) => { return state.emailMessage },
    getAddressMessage: (state) => { return state.addressMessage },
    getCityMessage: (state) => { return state.cityMessage },
    getZipCodeMessage: (state) => { return state.zipCodeMessage },
    getAnswersMessage: (state) => { return state.answersMessage },
    getSpecialCharacters: (state) => { return state.specialCharacters }
  }
}
