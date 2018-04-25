export class Aluno {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public sobrenome: string = '',
        public email: string = '',
        public data_nascimento: string = '',
        public sexo: string = '',
        public cor: string = '',
    ){}
}