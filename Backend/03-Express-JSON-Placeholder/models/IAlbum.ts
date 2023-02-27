export interface IAlbum {
    find(arg0: (item: any) => boolean): IAlbum | undefined;
    userId: number;
    id: number;
    title: string;
  }
  