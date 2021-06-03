import MyAlert from './MyAlert';

export const ModalNotif = (
  title?: string,
  description?: string,
  buttonLeft?: string,
  onPressButtonLeft?: () => {} | undefined,
  buttonRight?: string,
  onPressButtonRight?: () => {} | undefined,
) => {
  console.log('ModalNotif',title, description);
  setTimeout(() => {
    MyAlert.show(
      title,
      description,
      buttonLeft,
      onPressButtonLeft,
      buttonRight,
      onPressButtonRight,
    );
  }, 300);
};
