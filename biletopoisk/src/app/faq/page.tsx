import { Accordion } from "@/components/Accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-6 bg-white rounded-lg">
        <h1 className="text-3xl">Вопросы-ответы</h1>
      </div>
      <Accordion
        title="Что такое Билетопоиск?"
        description="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
      />
      <Accordion
        title="Какой компании принадлежит Билетопоиск?"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sequi voluptate veniam error. Eaque laborum sequi fugit nisi, in quidem, libero nobis explicabo omnis maxime doloribus quo aperiam, totam deleniti!"
      />
      <Accordion
        title="Как купить билет на Билетопоиск?"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sequi voluptate veniam error. Eaque laborum sequi fugit nisi, in quidem, libero nobis explicabo omnis maxime doloribus quo aperiam, totam deleniti!"
      />
      <Accordion
        title="Как оставить отзыв на Билетопоиск?"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sequi voluptate veniam error. Eaque laborum sequi fugit nisi, in quidem, libero nobis explicabo omnis maxime doloribus quo aperiam, totam deleniti!"
      />
    </div>
  );
}
