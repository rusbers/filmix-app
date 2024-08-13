"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, Bookmark } from "lucide-react";
import {
  toggleBookmarkAction,
  toggleLikeDislikeAction,
} from "@/lib/actions/show";
import { ButtonHTMLAttributes, useTransition } from "react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type ActionType = "like" | "dislike" | "bookmark";

type BaseActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showId: string;
  showTitle: string;
  isDisabled?: boolean;
  variant?: "page" | "card";
};

type AppreciationBtnProps = BaseActionProps & {
  action: "like" | "dislike";
  isPerformed: boolean;
};

type BookmarkBtnProps = BaseActionProps & {
  isBookmarked: boolean;
};

const icons = {
  like: ThumbsUp,
  dislike: ThumbsDown,
  bookmark: Bookmark,
};

function useActionHandler(actionFn: () => Promise<any>) {
  const [isPending, startTransition] = useTransition();

  const handleAction = () => {
    startTransition(async () => {
      const error = await actionFn();
      if (error) {
        toast.error(error.message);
      }
    });
  };

  return { isPending, handleAction };
}

function ActionButton({
  variant = "page",
  type,
  isPerformed,
  isDisabled,
  isPending,
  action,
}: {
  variant: "card" | "page";
  type: ActionType;
  isPerformed: boolean;
  isDisabled: boolean;
  isPending: boolean;
  action: () => void;
}) {
  const Icon = icons[type];

  const buttonClassName = cn(
    "group/action-btn inline-flex size-10 items-center justify-center rounded-full p-0 active:opacity-50 cursor-pointer transition-colors duration-300",
    {
      "z-10 size-8 bg-app-dark-blue/50 hover:bg-white": variant === "card",
    },
  );

  const iconClassName =
    variant === "page"
      ? cn("size-6 stroke-app-greyish-blue", {
          "fill-app-greyish-blue": isPerformed,
          "opacity-50": isDisabled,
          "opacity-100": !isDisabled,
        })
      : cn("size-4 group-hover/action-btn:stroke-app-dark-blue", {
          "fill-white group-hover/action-btn:fill-black group-hover/action-btn:stroke-black":
            isPerformed,
          "opacity-50": isDisabled,
          "opacity-100": !isDisabled,
        });

  const button = (
    <Button
      onClick={action}
      disabled={isPending}
      className={buttonClassName}
      variant="ghost"
    >
      <span className="sr-only">{type} this show</span>
      <Icon className={iconClassName} />
    </Button>
  );

  if (isDisabled) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className={cn(buttonClassName, "active:opacity-100")}>
            <Icon className={iconClassName} />
          </TooltipTrigger>
          <TooltipContent>
            Currently unavailable. Please try again later.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return button;
}

export function AppreciationBtn({
  action,
  showId,
  showTitle,
  isPerformed,
  isDisabled = false,
  variant = "page",
}: AppreciationBtnProps) {
  const { isPending, handleAction } = useActionHandler(() =>
    toggleLikeDislikeAction({ action, showId, showTitle }),
  );

  return (
    <ActionButton
      variant={variant}
      type={action}
      isPerformed={isPerformed}
      isDisabled={isDisabled}
      isPending={isPending}
      action={handleAction}
    />
  );
}

export function BookmarkBtn({
  showId,
  showTitle,
  isBookmarked,
  isDisabled = false,
  variant = "page",
}: BookmarkBtnProps) {
  const { isPending, handleAction } = useActionHandler(() =>
    toggleBookmarkAction({ showId, showTitle }),
  );

  return (
    <ActionButton
      variant={variant}
      type="bookmark"
      isPerformed={isBookmarked}
      isDisabled={isDisabled}
      isPending={isPending}
      action={handleAction}
    />
  );
}
