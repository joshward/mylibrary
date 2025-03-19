import { Book as BookModel } from "@/models/books";

interface BookProps {
  info: BookModel;
}

export default function Book({ info }: BookProps) {
  return (
    <div className="bg-slate-100 p-4 rounded flex flex-row gap-4">
      <div className="hidden md:inline min-w-[128px]">
        {info.thumbnail && <img src={info.thumbnail} alt="Book Cover" />}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg md:text-xl">{info.title}</h3>

        <div className="flex flex-row gap-2">
          <div className="md:hidden">
            {info.thumbnail && <img src={info.thumbnail} alt="Book Cover" />}
          </div>

          <div className="bg-red-500 size-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reprehenderit delectus nisi tempora maxime placeat ratione voluptas
            explicabo nihil animi voluptatem, adipisci accusantium aperiam
            earum. A nisi veritatis ullam eos!
          </div>
        </div>
      </div>
    </div>
  );
}
