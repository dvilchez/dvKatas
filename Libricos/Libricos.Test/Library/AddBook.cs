using Machine.Specifications;

namespace Libricos.Test.Library
{
    [Subject(typeof(Library))]
    public class when_add_one_book_to_library
    {
        Establish context=()=>library = User.Library;
        Because of = () => library.AddBook(book);

        It should_have_one_book_more = () => library.TotalBooks.ShouldBe(1);
    }

    public class Library
    {
        
    }
}
