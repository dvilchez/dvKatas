using Microsoft.VisualStudio.TestTools.UnitTesting;
using Raven.Client;
using Raven.Client.Embedded;

namespace RavenDbSpike.Test
{
    [TestClass]
    public class RavenDb
    {
        private static IDocumentStore store;

        [AssemblyInitialize()]
        public static void InitializeRaven(TestContext testContext)
        {
            store =
                    new EmbeddableDocumentStore { RunInMemory = true };
            store.Initialize();
        }

        [TestMethod]
        public void Insert()
        {
            var location = new Location
            {
                Name = "Wawel castle",
                Description = "The most amazing castle in the whole world",
                Latitude = 50.05386m,
                Longitude = 19.9353m
            };

            using (var session=store.OpenSession())
            {
                session.Store(location);
                session.SaveChanges();
            }
        }

        [TestMethod]
        public void Load()
        {
            using(var session=store.OpenSession())
            {
                var obj = session.Load<Location>("locations/1");
                Assert.IsNotNull(obj);
            }
        }

        [TestMethod]
        public void UpdateChanges()
        {
            using (var session=store.OpenSession())
            {
                var obj=session.Load<Location>("locations/1");
                obj.Description = "changed description";
                session.SaveChanges();
            }
        }

        [TestMethod]
        public void Delete()
        {
            using (var session=store.OpenSession())
            {
                var obj = session.Load<Location>("locations/1");
                session.Delete(obj);
                session.SaveChanges();
            }
        }
    }

    public class Location
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }

    }
}
