function numUniqueEmails(emails: string[]): number {
    emails = emails.map(email => {
        const emailParts: string[] = email.split('@');
        const  localName = emailParts[0].split('+');
        return localName[0].split('.').join('') + '@' + emailParts[1];
    });
    return (new Set(emails)).size;
};