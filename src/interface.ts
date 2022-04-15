export interface ClaimFields {
    id: number,
    title: string,
    fieldValue: number | string,
}

export interface Lang {
    lang: string,
    changeLanguage?: React.MouseEventHandler<HTMLButtonElement>,
  }