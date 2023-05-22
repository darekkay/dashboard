import React from "react";
import { Button } from "@darekkay/react-ui";

import useBooleanState from "common/hooks/useBooleanState";

import Modal from "../index";

export default {
  title: "Components/Modal",
};

const ModalVariant = ({
  buttonLabel = "",
  headlineVisible = true,
  footerVisible = true,
  children,
}: {
  buttonLabel?: string;
  headlineVisible?: boolean;
  footerVisible?: boolean;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [isModalOpen, openModal, closeModal] = useBooleanState(false);

  return (
    <>
      <Button onClick={openModal}>{buttonLabel}</Button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        headline={headlineVisible ? buttonLabel : undefined}
        renderFooter={
          footerVisible
            ? () => (
                <>
                  <Button
                    className="w-full md:w-auto"
                    outline
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button className="w-full md:w-auto" onClick={closeModal}>
                    Save
                  </Button>
                </>
              )
            : undefined
        }
      >
        {children}
      </Modal>
    </>
  );
};

export const Variants = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 text-center ">
        <ModalVariant buttonLabel="Small modal">
          Small modal content
        </ModalVariant>
        <ModalVariant buttonLabel="Big modal">
          <div className="modal-content space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis.
            </p>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, At accusam aliquyam diam
              diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et
              et invidunt justo labore Stet clita ea et gubergren, kasd magna no
              rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat.
            </p>
          </div>
        </ModalVariant>
        <ModalVariant buttonLabel="No headline" headlineVisible={false}>
          No headline
        </ModalVariant>
        <ModalVariant buttonLabel="No footer" footerVisible={false}>
          No footer
        </ModalVariant>
      </div>
    </>
  );
};
