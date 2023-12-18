"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";

const RulesPage = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className=" bg-red m-auto mt-20 gap-12 flex max-w-2xl flex-col">
      <h1 className="text-4xl font-semibold pl-4">Rules</h1>
      <Accordion selectionMode="multiple" variant="bordered">
        <AccordionItem key="1" aria-label="Rule 1" title="Rule 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Rule 2" title="Rule 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Rule 3" title="Rule 3">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="4" aria-label="Rule 4" title="Rule 4">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="5" aria-label="Rule 5" title="Rule 5">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="6" aria-label="Rule 6" title="Rule 6">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RulesPage;
