import MyAlert from './MyAlert';

export const ModalNotif = (
  title?: string,
  description?: string,
  buttonLeft?: string,
  onPressButtonLeft?: () => void | null,
  buttonRight?: string,
  onPressButtonRight?: () => void | null,
) => {
  console.log('fucn', onPressButtonLeft);
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
