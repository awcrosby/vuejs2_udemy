export const sharedObj = {
    name: 'Andrew',
    age: 36,
    devices: ['asus-gtx', 'asus-t100ha', 'asus-light', 'nexus-5x'],
    book: {
        title: 'ready player one',
        author: 'ernest cline',
        year: 2010
    },
    getBookInfo() {
        return this.book.title + 'by' + this.book.author;
    }
};
