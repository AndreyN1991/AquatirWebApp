using System.ComponentModel.DataAnnotations.Schema;

namespace AquatirWebApp.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public int uGoo { get; set; }
        [ForeignKey("uGoo")]
        public Goo wrGoo { get; set; }
        public string AccountName { get; set; }
    }
}
