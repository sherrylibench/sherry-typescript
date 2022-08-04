declare global{
    /** my definition of formatDate function */
    function formatDate(date: Date):string
    interface Window{
        /**
         * use declaration merging to define my owen window variable
         */
         MY_VAR: string
    }
}

export {}