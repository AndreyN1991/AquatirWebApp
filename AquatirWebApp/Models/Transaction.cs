using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace AquatirWebApp.Models
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public int AccountId { get; set; }
        [ForeignKey("AccountId")]
        public Account Accounts { get; set; }
        [Required]
        [NotNull]
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Ammount { get; set; }
        [Required]
        public bool IO { get; set; } = false;
        public DateTime TransactionDate { get; set; }
    }
}
