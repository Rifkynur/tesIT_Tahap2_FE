import { create } from "zustand";

const useModalStore = create((set) => ({
  modalAddPatientIsOpen: false,
  modalDeletePatientIsOpen: false,
  modalUpdatePatientIsOpen: false,

  modalDeleteRegistrationIsOpen: false,
  modalAddRegistrationIsOpen: false,

  patientId: null,
  registrationId: null,

  openAddModal: () => set({ modalAddPatientIsOpen: true }),
  closeAddModal: () => set({ modalAddPatientIsOpen: false }),

  openDeleteModal: (id) => set({ modalDeletePatientIsOpen: true, patientId: id }),
  closeDeleteModal: () => set({ modalDeletePatientIsOpen: false, patientId: null }),

  openUpdateModal: (id) => set({ modalUpdatePatientIsOpen: true, patientId: id }),
  closeUpdateModal: () => set({ modalUpdatePatientIsOpen: false, patientId: null }),

  openDeleteModalRegistration: (id) => set({ modalDeleteRegistrationIsOpen: true, registrationId: id }),
  closeDeleteModalRegistration: () => set({ modalDeleteRegistrationIsOpen: false, registrationId: null }),

  openAddModalRegistration: () => set({ modalAddRegistrationIsOpen: true }),
  closeAddModalRegistration: () => set({ modalAddRegistrationIsOpen: false }),
}));

export default useModalStore;
