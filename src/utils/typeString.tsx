type MenuOptions = {
  _id: String;
  title: string;
  func: () => void;
};

export const MenuOptions: MenuOptions[] = [
  {
    _id: '0',
    title: 'Báo cáo ...',
    func: () => {
      console.log('Báo cáo ...');
    },
  },
  {
    _id: '1',
    title: 'Bật Thông báo về bài viết',
    func: () => {
      console.log('Bật Thông báo về bài viết');
    },
  },
  {
    _id: '2',
    title: 'Sao chép bài viết',
    func: () => {
      console.log('Sao chép bài viết');
    },
  },
  {
    _id: '3',
    title: 'Chia sẽ lên ...',
    func: () => {
      console.log('Chia sẽ lên ...');
    },
  },
  {
    _id: '4',
    title: 'Bõ theo dõi',
    func: () => {
      console.log('Bõ theo dõi');
    },
  },
  {
    _id: '5',
    title: 'Ẩn',
    func: () => {
      console.log('Ẩn');
    },
  },
];
