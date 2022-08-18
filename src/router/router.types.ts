export type StartNavParamList = {
  Main: undefined;
};

export type RootNavParamList = {
  MainNavigation: undefined;
  LiveNavigation: undefined;
  OptionModal: undefined;
  TalkNavigation: undefined;
  MyPageNavigation: undefined;
};

export type MainParamList = {
  Main_Page: undefined;
  CameraTest:
    | {
        type?: string;
      }
    | undefined;
  VideoTest:
    | {
        type?: string;
      }
    | undefined;
  ImageFilterTest:
    | {
        imageUrl?: string;
        type?: string;
      }
    | undefined;
  VideoFilterTest:
    | {
        videoUrl?: string;
        type?: string;
      }
    | undefined;
  ImageSelectTest:
    | {
        videoUrl?: string;
        type?: string;
      }
    | undefined;
  ImageSelectFilterTests:
    | {
        imageArray?: any;
        type?: string;
      }
    | undefined;
};
