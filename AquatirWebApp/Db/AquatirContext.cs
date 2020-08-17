using AquatirWebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace AquatirWebApp.Db
{
    public class AquatirContext : DbContext
    {
        public AquatirContext(DbContextOptions options) : base(options) { }
        public DbSet<Goo> Goos { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}
