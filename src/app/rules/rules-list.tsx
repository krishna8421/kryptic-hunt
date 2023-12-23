"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { rulesData } from "@/constants";

const RulesList = () => {
  const itemClasses = {
    base: "py-3",
    title: "font-normal text-medium text-gray-200",
    content: "text-small px-2 text-gray-400",
  };
  return (
    <Accordion
      selectionMode="multiple"
      variant="bordered"
      itemClasses={itemClasses}
    >
      {rulesData.map((d, i) => (
        <AccordionItem key={i} aria-label={d.title} title={d.title}>
          {d.rule}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default RulesList;
