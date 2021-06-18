export type BookProps = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};
