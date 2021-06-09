export type BookProps = {
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};
