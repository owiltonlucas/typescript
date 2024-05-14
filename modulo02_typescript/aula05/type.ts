function firstLetterUpperCase(name: string) {
    let firstletter = name.charAt(0).toUpperCase();
    return firstletter+name.substring(1);
}