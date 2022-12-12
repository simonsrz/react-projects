export const generateKey = (): any => {
    var result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 24; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}