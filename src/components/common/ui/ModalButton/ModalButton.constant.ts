export const ModalButtonVariantConfig = {
  full: 'primary',
  confirm: 'primary',
  cancel: 'subtle',
  delete: 'emp',
} as const;

export type ModalButtonVariant = keyof typeof ModalButtonVariantConfig;
