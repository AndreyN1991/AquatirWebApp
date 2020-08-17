using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AquatirWebApp.Models
{
    [Table("wrGoo")]
    public class Goo
    {
        [Key]
        public int uGoo { get; set; }
        public string cGoo { get; set; }
    }
}
